# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :tasks, [Types::TaskType], null: false
    field :task, Types::TaskType, null: false do
      description "Find a user by id"
      argument :id, ID, required: true
    end

    def tasks
      Task.all
    end

    def task(id:)
      Task.find(id)
    end
  end
end
