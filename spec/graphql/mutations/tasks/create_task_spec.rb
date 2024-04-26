require 'rails_helper'

module Mutations
  module Tasks
    RSpec.describe CreateTask, type: :request do
      describe '.resolve' do
        it 'updates the task' do
          expect do
            post '/graphql', params: { query: query() }
          end.to change { Task.count }.by(1)
        end

        it 'returns task data' do
          post '/graphql', params: { query: query() }

          json = JSON.parse(response.body)
          data = json['data']['createTask']['task']

          expect(data).to include(
            'id'              => be_present,
            'title'           => 'My New Task Title',
            'description'     => "Here's a description of my task!",
            'completed'       => false,
            'dueDate'         => "2024-04-29",
            'createdAt'       => be_present,
            'updatedAt'       => be_present,
          )
        end
      end

      def query()
        <<~GQL
          mutation {
            createTask(
              attributes: {
                title: "My New Task Title"
                description: "Here's a description of my task!"
                dueDate: "2024-04-29"
              }
            ) {
              task{
                id
                title
                description
                completed
                dueDate
                createdAt
                updatedAt
              }
            }
          }
        GQL
      end
    end
  end
end