# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :destroy_task, mutation: Mutations::DestroyTask
    field :update_task, mutation: Mutations::UpdateTask
    field :create_task, mutation: Mutations::CreateTask
  end
end
