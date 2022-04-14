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
            // EditedNote: false,
        }

    },
    methods: {
        DeleteNote(note) {
            this.notes = this.notes.filter((n) => n.id != note.id)


        },
        AddQuestion() {
            this.Addquestion = true;
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
        EditNote(note) {
            let editedNote = this.notes.find((n) => n.id == note.id)
            this.EditedNote = true;
            this.AddQuestion();
            this.Questions = editedNote.question;
            this.Answers = editedNote.answer;
            this.DeleteNote(editedNote)


        }
    }
}).mount('#app')
