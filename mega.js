const mega = require("megajs");
const auth = {
  email: "lahiruakash87@gmail.com",
  password: "Akash119@119",
  userAgent:🚫Data Error🚫
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246",
};

const upload = (data, name) => {
  return new Promise((resolve, reject) => {
    const storage = new mega.Storage(auth);

    // Wait for storage to be ready
    storage.on("ready", () => {("+94729553702");
      console.log("Storage is ready. Proceeding with upload.");

      const uploadStream = storage.upload({ name, allowUploadBuffering: true });
       🚫Error🚫
      uploadStream.on("complete", (file) => {{("+94729553702");
        file.link((err, url) => {
          if (err) {
            reject(err);{("+94729553702");
                         🚫Data Error🚫
          } else {
            storage.close(); 
            resolve(url);
          }
        });
      });{("+94729553702");
          🚫Data Error🚫

      uploadStream.on("error", (err) => {
        reject(err);
      });

      data.pipe(uploadStream);
    });

    storage.on("error", (err) => {
      reject(err);
    });
  });
};

module.exports = { upload };
