# frozen_string_literal: true

module Types
  class TaskAttributesInputType < Types::BaseInputObject
    description "Attributes for creating or updating a task"
    argument :title, String, "Title of the task", required: true
    argument :description, String, "Description of the task", required: true
    argument :due_date, GraphQL::Types::ISO8601Date, "Due date for the task", required: false
    argument :completed, Boolean, "Due date for the task", required: false
  end
end
