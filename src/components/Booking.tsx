
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Updated to 30-minute slots
  const availableTimes = [
    "09:00", "09:30", 
    "10:00", "10:30", 
    "11:00", "11:30",
    "14:00", "14:30", 
    "15:00", "15:30"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !name || !email) return;

    // Format the event time
    const eventDate = new Date(date);
    const [hours, minutes] = time.split(':');
    eventDate.setHours(parseInt(hours), parseInt(minutes));
    const endTime = new Date(eventDate.getTime() + 30 * 60000); // Add 30 minutes

    // Create Google Calendar event URL
    const event = {
      text: `Consultation with ${name}`,
      dates: `${eventDate.toISOString()}/${endTime.toISOString()}`,
      details: `Meeting with ${name} (${email})`,
      location: "Online Meeting"
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.text
    )}&dates=${encodeURIComponent(
      event.dates.replace(/[-:]/g, "").replace(/\.\d{3}/g, "")
    )}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(
      event.location
    )}`;

    // Open Google Calendar in a new window
    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <section id="booking" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Schedule
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4">
            Book Your Session
          </h2>
          <p className="text-primary-light mt-2">30-minute consultation sessions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black border border-primary/20 p-6 rounded-xl shadow-lg"
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md text-primary"
              disabled={(date) => {
                // Disable past dates and weekends
                const now = new Date();
                now.setHours(0, 0, 0, 0);
                return (
                  date < now ||
                  date.getDay() === 0 ||
                  date.getDay() === 6
                );
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {availableTimes.map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={`p-3 rounded-lg border transition-all duration-300 ${
                    time === t
                      ? "border-primary bg-primary text-black"
                      : "border-primary/20 text-primary hover:border-primary"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-black border border-primary/20 text-primary placeholder-primary/50 focus:border-primary outline-none transition-all duration-300"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-black border border-primary/20 text-primary placeholder-primary/50 focus:border-primary outline-none transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-black px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!date || !time || !name || !email}
              >
                Add to Google Calendar
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
