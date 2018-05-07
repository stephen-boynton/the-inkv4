const s3 = require('s3');
const { cMaybe } = require('../../utility');

const client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY
  }
});

function uploadToS3(file) {
  console.log('In here');
  const params = {
    localFile: file,

    s3Params: {
      Bucket: process.env.BUCKET,
      Key: '/'
    }
  };

  client.uploadFile(params);
  uploader.on('error', function(err) {
    console.error('unable to upload:', err.stack);
  });
  uploader.on('progress', function() {
    console.log(
      'progress',
      uploader.progressMd5Amount,
      uploader.progressAmount,
      uploader.progressTotal
    );
  });
  uploader.on('end', function() {
    console.log('done uploading');
  });
}

module.exports = cMaybe(x => x, undefined, uploadToS3);
