require('dotenv');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const multerS3 = require('multer-s3');
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const imageClientName = "image";

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

const upload = (bucket) => multer({
    storage: multerS3({
        s3,
        bucket,
        metadata: function(req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            const {mimetype} = file;
            const index = (mimetype.indexOf('/') + 1);
            const format = mimetype.slice(index);
            const name = `${uuidv4()}.${format}`;
            cb(null, name)
        },
        acl: 'public-read'
    })
})

module.exports.uploadSingleImg = upload(bucketName).single(imageClientName)

