import json

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

from preprocess import preprocess_text


class FAQChatbot:
    """
    NLP-based FAQ Chatbot using
    TF-IDF + Cosine Similarity
    """

    def __init__(self, faq_file):
        self.faq_file = faq_file
        self.questions = []
        self.answers = []
        self.processed_questions = []
        self.vectorizer = TfidfVectorizer()
        self.tfidf_matrix = None

        self.load_faqs()

    def load_faqs(self):
        """
        Load FAQ dataset from JSON file.
        """
        with open(self.faq_file, "r", encoding="utf-8") as file:
            faqs = json.load(file)

        self.questions = [
            faq["question"]
            for faq in faqs
        ]

        self.answers = [
            faq["answer"]
            for faq in faqs
        ]

        self.processed_questions = [
            preprocess_text(question)
            for question in self.questions
        ]

        self.tfidf_matrix = self.vectorizer.fit_transform(
            self.processed_questions
        )

    def find_best_match(self, user_question):
        """
        Find the most similar FAQ question.
        """
        processed_input = preprocess_text(user_question)

        input_vector = self.vectorizer.transform(
            [processed_input]
        )

        similarity_scores = cosine_similarity(
            input_vector,
            self.tfidf_matrix
        )

        best_match_index = similarity_scores.argmax()
        best_score = similarity_scores[0][best_match_index]

        return best_match_index, best_score

    def get_response(self, user_question):
        """
        Return the best matching answer.
        """
        index, score = self.find_best_match(user_question)

        if score >= 0.30:
            return {
                "answer": self.answers[index],
                "question": self.questions[index],
                "confidence": round(float(score), 2)
            }

        return {
            "answer": "Sorry, I couldn't find a relevant answer. Please try asking your question differently.",
            "question": None,
            "confidence": round(float(score), 2)
        }


if __name__ == "__main__":

    chatbot = FAQChatbot("faq.json")

    print("=" * 50)
    print(" Smart FAQ Chatbot ")
    print("Type 'exit' to quit.")
    print("=" * 50)

    while True:

        user_input = input("\nYou: ")

        if user_input.lower() == "exit":
            print("Bot: Goodbye!")
            break

        response = chatbot.get_response(user_input)

        print("\nBot:", response["answer"])
        print("Confidence:", response["confidence"])