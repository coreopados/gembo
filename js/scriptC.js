$(document).ready(function () {

    //meetings

    let events = {
        events: [
            {
                title: 'Название мероприятия2',
                start: '2020-07-01T12:00',
                end: '2020-07-05T12:30',
                extendedProps: {
                    link: '#',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
                    timeFrom: '12:00',
                    timeTo: '12:30'
                }
            },
            {
                title: 'Название мероприятия2',
                start: '2020-07-20T12:00',
                end: '2020-07-20T12:30',
                extendedProps: {
                    link: '#',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
                    timeFrom: '12:00',
                    timeTo: '12:30'
                }
            },
            {
                title: 'Название мероприятия1',
                start: '2020-07-26T12:00',
                end: '2020-07-26T12:30',
                extendedProps: {
                    link: '#',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
                    timeFrom: '13:00',
                    timeTo: '14:30'
                }
            }
        ]
    }


    let calendarEl = document.getElementById('large');
    let calendarSmallEl = document.getElementById('small');

    // large
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'ru',
        firstDay: 1,
        height: 'auto',
        headerToolbar: false,
        footerToolbar: {
            start: '',
            center: '',
            end: 'prev,next'
        },
        dayHeaderFormat: {
            weekday: 'long'
        },
        events,
        eventBackgroundColor: '#009e5d',
        eventTextColor: '#fff',
        eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: false
        },
        displayEventTime: false,
        eventClick: function (info) {
            let winWidth = $(window).width() / 2;
            let mleft = info.jsEvent.pageX;
            let mRight = $(window).width() - info.jsEvent.pageX

            if (info.jsEvent.pageX > winWidth) {
                $(".eventPopup").addClass("active").css("right", mRight).css("top", info.jsEvent.pageY).css("left", "auto")
            } else {
                $(".eventPopup").addClass("active").css("left", mleft).css("top", info.jsEvent.pageY).css("right", "auto")
            }

            $(".eventPopupTitle").text(info.event.title);
            $(".eventPopupLink").prop("href", info.event.extendedProps.link)
            $(".eventPopupDescription").text(info.event.extendedProps.description)
            $(".timeFrom").text(info.event.extendedProps.timeFrom)
            $(".timeTo").text(info.event.extendedProps.timeTo)
        }

    });

    // small
    let calendarSmall = new FullCalendar.Calendar(calendarSmallEl, {
        initialView: 'dayGridMonth',
        locale: 'ru',
        firstDay: 1,
        height: 'auto',
        headerToolbar: {
            start: '',
            center: 'prev, title, next',
            end: ''
        },
        events,
        eventColor: '#009e5d',
        eventBackgroundColor: '#009e5d',
        eventTextColor: '#ddd',
        eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: false
        },
        displayEventTime: false,
        eventDisplay: "block"
    });
    calendar.render();
    calendarSmall.render();
});
