let nextId = 3;


Vue.createApp({
    data() {
        return {
            notes: [{
                id: 1,
                question: "¿Cómo hago para iterar un array con Vue?",
                answer: "Usa la directiva v-for"
            }, {
                id: 2,
                question: "¿Cómo hago para relacionar una variable de estado con el campo <em>value</em>' de input?",
                answer: "La directiva v-model nos ayudará en este caso"

            }],
            Addquestion: false,

            Questions: "",
            Answers: "",
            id: 0,
            NoteEditedAsk: false,
            MainNote: {},
        }

    },
    methods: {
        DeleteNote(note) {
            this.notes = this.notes.filter((n) => n.id != note.id)


        },
        AddQuestion() {
            this.Addquestion = !this.Addquestion;
            console.log("Soy el botón de cierre " + this.Addquestion)
        },

        AddNote() {
            if (this.notes.lenth > 1) {
                this.id = this.notes[this.notes.length - 1].id + 1
            }
            else {
                this.id++;
            }
            let newNote = { id: this.id, question: this.Questions, answer: this.Answers }
            this.notes.push(newNote)
            this.Addquestion = false;
            this.Questions = "";
            this.Answers = "";
            console.log(this.notes)

        },
        FocusNote(note){
            let editedNote = this.notes.find((n) => n.id == note.id)
            let editedFocus = note.NoteEditedAsk;
            this.MainNote = editedNote;
            editedFocus = true;
            this.EditNote();
            
        }, 
        EditNote() {
            this.AddQuestion();
            this.Questions = this.MainNote.question;
            this.Answers = this.MainNote.answer;
            if(this.AddNote){
                console.log("entro")
                this.DeleteNote(this.MainNote)
            }
           
        }
    }
}).mount('#app')


// :class="{answer : NoteEditedAsk}"
// {{ movie == 1 ? 'Jaydeep' : 'pakainfo.com' }}