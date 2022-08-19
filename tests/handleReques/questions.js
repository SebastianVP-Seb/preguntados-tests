import {rest} from 'msw';
import { responseQuestions } from './mocks';

export const handleRequestQuestions = rest.get('http://localhost:8081/api/questions', (req, resp, ctx)=>{
    return resp(
        ctx.json(responseQuestions)
    );
});