# frozen_string_literal: true

module Mutations
  class DestroyTask < BaseMutation
    field :id, ID, null: true

    argument :id, ID, required: true

    def resolve(id:)
      task = Task.find(id)

      return unless task

      task.destroy
        {
          id: id,
        }
    end
  end
end
