# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
Task.create(
  [
    {
      title: 'My 1st Task',
      description: "Here's the description of my 1st task.",
      completed: false,
      due_date: DateTime.new(2024,4,29)
    },
    {
      title: 'My 2nd Task',
      description: "Here's the content for my 2nd task.",
      completed: true,
      due_date: DateTime.new(2024,4,30)
    },
  ]
)
