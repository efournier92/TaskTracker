# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :tasks, [Types::TaskType], null: false
    def tasks
      Task.all
    end
  end
end
