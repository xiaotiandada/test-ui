import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from 'class-validator';

export class Post {
  @Length(10, 20, {
    message: 'username length 2 - 30'
  })
  title: string;

  @Contains('hello')
  text: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsEmail()
  email: string;

  @IsFQDN()
  site: string;

  @IsDate()
  createDate: Date;
}

export default function App() {

  const handleSubmit = () => {
    let post = new Post();
    post.title = 'Hello'; // should not pass
    post.text = 'this is a great post about hell world'; // should not pass
    post.rating = 11; // should not pass
    post.email = 'google.com'; // should not pass
    post.site = 'googlecom'; // should not pass

    validate(post).then(errors => {
      // errors is an array of validation errors
      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
        console.log("err", errors[0].constraints)
      } else {
        console.log('validation succeed');
      }
    });

    validateOrReject(post).catch(errors => {
      console.log('Promise rejected (validation failed). Errors: ', errors);
    });
    // or
    async function validateOrRejectExample(post) {
      try {
        await validateOrReject(post);
      } catch (errors) {
        console.log('Caught promise rejection (validation failed). Errors: ', errors);
      }
    }
  }

  return (
    <button onClick={handleSubmit}>Submit</button>
  )
}