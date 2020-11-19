import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
findAllCourses = () =>
fetch('http://CoursedemoDev-env.eba-kkep726v.us-east-1.elasticbeanstalk.com/api/courses')
  .then(response => response.json())
}
