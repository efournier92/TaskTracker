require "test_helper"

class TaskTest < ActiveSupport::TestCase
  setup do
    @task = Task.new
    @task.title = "Task Title"
    @task.description = "Task Description"
  end

  test "a new task with title and description explicitly set is valid" do
    @task.save
    assert @task.valid?, "task should be valid"
  end

  test "a new task has an id automatically generated" do
    @task.save
    assert @task.id.present?, "id should be automatically generated on creation of instance"
  end

  test "a new task with no title is not valid" do
    @task.title = nil
    @task.save
    assert !@task.valid?, "task should not be valid"
  end

  test "a new task with no description is not valid" do
    @task.description = nil
    @task.save
    assert !@task.valid?, "task should not be valid"
  end

  test "completed should default to false for a new task" do
    @task.save
    assert @task.completed == false, "completed should default to false"
  end

  test "due_date is optional" do
    @task.due_date = nil
    @task.save
    assert @task.valid?, "a new task with no due_date is valid"
  end

  test "a new task with a DateTime due_date is valid" do
    @task.due_date = DateTime.current
    @task.save
    assert @task.valid?, "a new task with a due_date is valid"
  end
end
