# frozen_string_literal: true

module Mutations
  class UpdateTask < BaseMutation
    field :id, ID, null: false

    argument :id, ID, required: true
    argument :attributes, Types::TaskAttributesInputType, required: true

    def resolve(id:, attributes:)
      task = Task.find(id)
      if task.update(attributes.to_h)
        # Return the task to the client on succcess
        {
          id: task.id,
          errors: []
        }
      else
        # Raise and return errors to the client on failure
        raise GraphQL::ExecutionError, post.errors.full_messages.join(", ")
      end
    end
  end
end
