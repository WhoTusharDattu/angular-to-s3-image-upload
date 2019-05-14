import * as S3 from 'aws-sdk/clients/s3';
import { environment } from '../../environments/environment';
export class ImageService {

    uploadFile(file) {
        console.log('called');
        const contentType = file.type;
        const bucket = new S3(
              {
                  accessKeyId: environment.aws.accessKeyId,
                  secretAccessKey: environment.aws.secretAccessKey,
              }
          );
          const params = {
              Bucket: environment.aws.s3.bucket,
              Key: file.name,
              Body: file,
              ACL: 'public-read',
              ContentType: contentType
          };
          bucket.upload(params, function (err, data) {
              if (err) {
                  console.log('There was an error uploading your file: ', err);
                  return false;
              }
              console.log('Successfully uploaded file.', data);
              return true;
          });
    }
  }
