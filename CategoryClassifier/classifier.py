import numpy as np
import pandas as pd
import collections
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
#import streamlit as st
import joblib

##USER INPUT
def classifier(user_input):

    #user_input = box.input('')

    ##LOAD IN MODEL AND VECTOR
    NB_Model = joblib.load('NBClassifierModel.sav')
    vector = joblib.load('VectorNB.sav')
    

    # Create category names dictionary
    CategoryNamesDict = {"Film & Animation": 1,"Autos & Vehicles": 2,"Music": 10,
                "Pets & Animals": 15,"Sports":17,"Short Movies":18,"Travel & Events":19,"Gaming":20,
                "Videoblogging":21, "People & Blogs":22,"Comedy2":23,"Entertainment":24,"News & Politics":25,
                "Howto & Style":26,"Education":27, "Science & Technology":28,"Nonprofits & Activism":29,
                "Movies":30,"Anime/Animation":31,"Action/Adventure":32,"Classics":33,"Comedy":34,"Documentary":35,
                "Drama":36,"Family":37,"Foreign":38,"Horror":39,"Sci-Fi/Fantasy":40,"Thriller":41,"Shorts":42,
                "Shows":43,"Trailers":44
                }

    CategoryDict = [{'id': value, 'title': key} for key, value in CategoryNamesDict.items()]
    
    # Predict Category based off User input
    Titles = [user_input]

    Titles_counts = vector.transform(Titles)
    Predict = NB_Model.predict(Titles_counts)
    
    #Designed for list of titles
    CategoryNamesList = []

    for Category_ID in Predict:
        MatchingCategories = [x for x in CategoryDict if x["id"] == Category_ID]
        print(MatchingCategories)
        if MatchingCategories:
            CategoryNamesList.append(MatchingCategories[0]["title"])
    

    return Predict[0], CategoryNamesList[0]

# Test 
if __name__ == "__main__":
    Predict, CategoryName = classifier("Donald Trump gives White House Speech")
    print(f" {Predict}, {CategoryName}")

    
