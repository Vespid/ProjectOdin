function book(title,author,pages,read){
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.read= read;
    this.info = function(){
        //return (title,author,pages,read);
        return title + " by " + author + ", " + pages + " pages";
    }
}


abe= new book("Lord of the Flies","Keating",420,false);
console.log(abe.info())

function Student(){}

Student.prototype.sayName=function(){
    return(this.name);
}

Student.prototype.sayGrade=function(){
    return this.grade;
}

function EighthGrader(name){
    this.name=name;
    this.grade=8;
}

EighthGrader.prototype=Object.create(Student.prototype)

const carl = new EighthGrader("Carl");