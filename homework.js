class students{
    constructor(name,contact_information){
        this.name = name;
        if (typeof contact_information === "string" && contact_information) {
            this.contact_information = contact_information;
        }else{
            this.contact_information = "none"
        }
    }
}

class teachers{
    constructor(name,contact_information,subject_taught){
        this.name = name;
        if (typeof contact_information === "string" && contact_information) {
            this.contact_information = contact_information;
        }else{
            this.contact_information = "none"
        }
        this.subject_taught = subject_taught;
    }
    #course = new courses(this.subject_taught,this.name);
    addStudent(obj){
        if (obj.constructor !== students) {
            throw new Error("You can add only students");
        }else{
            this.#course._enrolled_students.push(obj)
        }
    }
    getStudents(){
        for (let i = 0; i < this.#course._enrolled_students.length; ++i) {
            console.log(this.#course._enrolled_students[i])
        }
    }
    removeFromCourse(obj){
        if (obj.constructor !== students) {
            throw new Error("You can add only students");
        }else{
            if (this.#course._enrolled_students.includes(obj)) {
                this.#course._enrolled_students.splice(this.#course._enrolled_students.indexOf(obj),1);
            }else{
                throw new Error("There is no such a student");
            }
        }
    }
}

class courses{
    _enrolled_students = [];
    constructor(course_title,instructor){
        this.course_title = course_title;
        this.instructor = instructor;
    }
}

let student1 = new students("Garnik","phone");
let student2 = new students("Aram","");
let student3 = new students("Hovhannes","gmail");
let student4 = new students("Lia","phone");

let teacher1 = new teachers("Hakob","phone","Math");
let teacher2 = new teachers("Hasmik","gmail","Biology");

teacher1.addStudent(student1);
teacher1.addStudent(student2);
teacher1.addStudent(student3);

teacher1.getStudents();
teacher1.removeFromCourse(student2);
console.log();
teacher1.getStudents();

