from flask import Flask, render_template, redirect, url_for, request
import classifier
import json

#Insert code here
app = Flask(__name__)

#app.config

@app.route("/model")
def model():
    return render_template('model.html')
    #classifier.classifier()

#BACKEND
@app.route("/classifier", methods=["POST"])
def post_classifier():
    #return json.dumps(classifier.classifier("Dog walks"))
    #x = classifier.classifier("Dog walks")
    #y = json.dumps(x) #converting to json
    print(request.form.to_dict(flat=False)) #SENDS to Json
    #print(json.loads(request.form))
    val1, val2= classifier.classifier("Input") #Takes the input
    py_dict = {"key1": 'val1', "key2": val2} #Turns to dictionary
    print(py_dict)
    return json.dumps(py_dict) #Returns dictionary in JSON
    

if __name__ == "__main__":
    app.run(debug=True)
