const { createApp } = Vue;

createApp({
    data() {
        return {

            user: [{
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            ],
            userSelected: null,
            newMessage: [{
                date: '10/01/2020 15:30:55',
                message: "",
            }],
            search: "",
            isOpen: false,

        }
    },

    methods: {
        onUserSelected() {
            this.userSelected = this.user[i];
            this.userSelected.classList.add('chat-active');
        },

        onMessageSubmit() {
            this.userSelected.messages.push({
                date: this.newMessage.date,
                message: this.newMessage.message,
                status: "sent",
            });

            this.startReplies();

        },

        startReplies() {

            this.timerId = setTimeout(() => {
                this.userSelected.messages.push({
                    date: this.newMessage.date,
                    message: "ok",
                    status: "received",
                });
            }, 1000);

        },

        toggle() {
            this.isOpen = !this.isOpen;
        }
    },

    beforeMount() {
        this.userSelected = this.user[0];
    },

    computed: {
        filteredList() {
            return this.postList.filter(post => {
                return post.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }

}).mount('#app');
