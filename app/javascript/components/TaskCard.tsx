import React, { useRef } from 'react';
import { Task } from '../models/Task';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
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
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const dueDateInputRef = useRef<HTMLInputElement>(null);
  const completedInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const taskToSave = new Task(
            titleInputRef?.current?.value || '',
            descriptionInputRef?.current?.value || '',
            new Date(dueDateInputRef?.current?.value || ''),
            completedInputRef?.current?.checked || false,
          );

          taskToSave.id = task.id;

          onSubmitAction(task);
        }}
      >
        <Card
          key={task.id}
          sx={{ m: 4 }}
        >
          <CardContent>
            <TextField
              label="Title"
              defaultValue={task.title}
              disabled={!isEditing}
              inputRef={titleInputRef}
              sx={{ width: 1, padding: 2 }}
            />
            <TextField
              label="Description"
              defaultValue={task.description}
              disabled={!isEditing}
              inputRef={descriptionInputRef}
              sx={{ width: 1, padding: 2 }}
            />
            <TextField
              label="Date (YYYY-MM-DD)"
              defaultValue={new Date(task.dueDate).toISOString().split('T')[0]}
              disabled={!isEditing}
              inputRef={dueDateInputRef}
              sx={{ width: 1, padding: 2 }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Is Complete?"
              inputRef={completedInputRef}
              sx={{ width: 1, padding: 2 }}
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
            </Typography>
          </CardActions>
        </Card>
      </form>
    </>
  );
}

export default TaskCard;
