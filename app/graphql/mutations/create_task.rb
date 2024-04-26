# frozen_string_literal: true

module Mutations
  class CreateTask < BaseMutation
    field :task, Types::TaskType, null: false

    argument :attributes, Types::TaskAttributesInputType, required: true

    def resolve(attributes:)
      task = Task.new

      if task.update(attributes.to_h)
        # Return the task to the client on succcess
        {
          task: task,
          errors: []
        }
      else
        # Return errors to the client on failure
        {
          task: nil,
          errors: post.errors.full_messages
        }
      end
    end
  end
end
