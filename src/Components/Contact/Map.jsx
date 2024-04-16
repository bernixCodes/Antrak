const Map = () => {
  return (
    <>
      <section className="bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461891081.94084805!2d-82.41298771247227!3d27.964839084832153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c5bcfe0ae24b%3A0x5ca93652c9149912!2s4018%20E%2012th%20Ave%2C%20Tampa%2C%20FL%2033605%2C%20USA!5e0!3m2!1sen!2sgh!4v1711547599649!5m2!1sen!2sgh"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Map;
