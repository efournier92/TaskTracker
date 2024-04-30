import React, { useRef, useState } from 'react';
import { Task } from '../models/Task';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
  CardActions,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';

class EditTaskFormProps {
  task: Task;
  isEditing: boolean;
  onSubmitAction: Function;
}

function TaskCard({ task, isEditing, onSubmitAction }: EditTaskFormProps) {
  const [titleState, setTitleState] = useState<string>(task.title);
  const [descriptionState, setDescriptionState] = useState<string>(
    task.description,
  );
  const [dueDateState, setDueDateState] = useState<string>(
    new Date(task.dueDate).toISOString().split('T')[0],
  );
  const [completedState, setCompletedState] = useState<boolean>(task.completed);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const taskToSave = new Task(
      titleState,
      descriptionState,
      new Date(dueDateState),
      completedState,
    );

    taskToSave.id = task.id;

    onSubmitAction(taskToSave);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          onFormSubmit(e);
        }}
      >
        <Card sx={{ m: 4, padding: 4 }}>
          <CardContent>
            <TextField
              label="Title"
              value={titleState}
              onChange={(e) => setTitleState(e.target.value)}
              disabled={!isEditing}
              sx={{ width: 1, mt: 4 }}
            />
            <TextField
              label="Description"
              value={descriptionState}
              onChange={(e) => setDescriptionState(e.target.value)}
              disabled={!isEditing}
              sx={{ width: 1, mt: 4 }}
            />
            <TextField
              label="Date (YYYY-MM-DD)"
              value={dueDateState}
              onChange={(e) => setDueDateState(e.target.value)}
              disabled={!isEditing}
              sx={{ width: 1, mt: 4 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={completedState}
                  onChange={(e) => setCompletedState(e.target.checked)}
                />
              }
              label="Is Complete?"
              disabled={!isEditing}
              sx={{ width: 1, mt: 4 }}
            />
          </CardContent>
          <CardActions>
            <Typography
              sx={{ width: 1 }}
              align="center"
            >
              <Link to={`/view-task/${task.id}`}>
                <IconButton
                  type="submit"
                  size="large"
                  aria-label="menu"
                  sx={{ m: 2 }}
                >
                  <VisibilityIcon />
                </IconButton>
              </Link>
              {isEditing && (
                <IconButton
                  type="submit"
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ m: 2 }}
                >
                  <SaveIcon />
                </IconButton>
              )}
              {!isEditing && (
                <Link to={`/edit-task/${task.id}`}>
                  <IconButton
                    type="submit"
                    size="large"
                    edge="start"
                    aria-label="menu"
                    sx={{ m: 2 }}
                  >
                    <EditIcon />
                  </IconButton>
                </Link>
              )}
              {!isEditing && (
                <IconButton
                  type="submit"
                  size="large"
                  edge="start"
                  aria-label="menu"
                  onClick={() => onSubmitAction(task)}
                  sx={{ m: 2 }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Typography>
          </CardActions>
        </Card>
      </form>
    </>
  );
}

export default TaskCard;
