document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    const eventDate = new Date("Dec 12, 2024 19:00:00");
    const eventTimeStamp = eventDate.getTime();

    const timeIsPassing = setInterval(function() {
        const now = new Date();
        const nowTimeStamp = now.getTime();

        const untilEvent = eventTimeStamp - nowTimeStamp;

        const daysInMs = 1000 * 60 * 60 * 24;
        const hoursInMs = 1000 * 60 * 60;
        const minInMs = 1000 * 60;
        const secInMs = 1000;

        const daysUntilEvent = Math.floor(untilEvent / (daysInMs));
        const hoursUntilEvent = Math.floor(untilEvent % (daysInMs) / (hoursInMs));
        const minUntilEvent = Math.floor((untilEvent % (hoursInMs)) / (minInMs));
        const secUltilEvent = Math.floor((untilEvent % minInMs) / secInMs);

        document.getElementById('counter').innerHTML = `começa em ${daysUntilEvent}d ${hoursUntilEvent}h ${minUntilEvent}m ${secUltilEvent}s`

        if (untilEvent < 0) {
            clearInterval(timeIsPassing);
            document.getElementById('counter').innerHTML = 'Já acabou'
        }
    }, 1000);
})