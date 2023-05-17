import AWS from "aws-sdk";

const s3download = function () {
  
  AWS.config.update({
    accessKeyId: "AKIAT45X27YLXTBOGUML",
    secretAccessKey: "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",
    region: "us-east-1",
  });

  const s3 = new AWS.S3();

  const params = {Bucket: "pf-portfoliovideos", Key: "video2.mov"}

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
