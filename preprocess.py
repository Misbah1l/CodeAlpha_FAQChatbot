# ======================================
# Smart FAQ AI
# preprocess.py
# ======================================


import string
import nltk

from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer



# ======================================
# Download NLTK Resources
# ======================================

try:

    nltk.data.find("tokenizers/punkt")

except LookupError:

    nltk.download("punkt")



try:

    nltk.data.find("corpora/stopwords")

except LookupError:

    nltk.download("stopwords")



try:

    nltk.data.find("corpora/wordnet")

except LookupError:

    nltk.download("wordnet")





# ======================================
# NLP Tools
# ======================================

lemmatizer = WordNetLemmatizer()


stop_words = set(
    stopwords.words("english")
)





# ======================================
# Text Preprocessing
# ======================================

def preprocess_text(text):

    """
    Clean and preprocess user input.
    """


    if not text:

        return ""



    # Lowercase

    text = text.lower()



    # Remove punctuation

    text = text.translate(

        str.maketrans(
            "",
            "",
            string.punctuation
        )

    )



    # Tokenization

    words = word_tokenize(text)



    # Remove stopwords + Lemmatization

    words = [

        lemmatizer.lemmatize(word)

        for word in words

        if word not in stop_words

    ]



    return " ".join(words)