import quizList from './quizlist.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import classes from './QuizListContainer.module.css';
import IconByLanguage from '../utils/IconByLanguage';

function QuizListContainer() {
  let quizes = [];
  quizList.forEach((item, index) => {
    quizes.push(<Card sx={{ maxWidth: 345, minWidth: 200 }} key={index}>
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
        <IconByLanguage lang={item.language}/> {item.language.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Level :</b> {item.level}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Questions :</b> {item.noOfQuestions}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button 
        size="small" 
        variant="outlined" 
        color="secondary"
        >Share</Button>
        <Button size="small" variant="contained">Start</Button>
      </CardActions>
    </Card>)
  })
  return <div className={classes.container}>{quizes}</div>
}

export default QuizListContainer;