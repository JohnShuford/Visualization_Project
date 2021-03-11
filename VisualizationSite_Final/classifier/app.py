from flask import Flask, render_template, redirect, url_for, request, jsonify
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
@app.route("/classifier", methods=["GET","POST"])
def post_classifier():
    if request.method == "POST":
    #print(request.form.to_dict(flat=False)) #SENDS to Json
    #print(request.form.get("id"))
        title = request.form.get("title") #Title = input that user will enter on website 
        print(title)
    else:
        title = request.args.get("title")
        print(title)
        #print(json.loads(request.form))
    id, category = classifier.classifier(title) #Takes the input
    py_dict = {"category": category} #Turns to dictionary
    print(py_dict)
    return json.dumps(py_dict) #Returns dictionary in JSON
    #return render_template('model.html')


@app.route("/api/v1.0/classifier/<title>")
def doclassify(title = None):
    id, category = classifier.classifier(title) #Takes the input
    py_dict = {"category": category} #Turns to dictionary
    print(py_dict)
    return jsonify(py_dict) #Returns dictionary in JSON
    #return render_template('model.html')

if __name__ == "__main__":
    app.run(debug=True)
