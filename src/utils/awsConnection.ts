import AWS from "aws-sdk";

const s3download = function () {
  
  AWS.config.update({
    accessKeyId: "",
    secretAccessKey: "",
    region: "us-east-1",
  });

  const s3 = new AWS.S3();

  const params = {Bucket: "", Key: ""}

  return new Promise((resolve, reject) => {
    s3.getObject(params, function (err, data) {
      if (err) {
        reject(err);
      } else {
        console.log("Successfully dowloaded data from  bucket");
        resolve(data);
      }
    });
  });
};

export default s3download;
