require 'rails_helper'

module Mutations
  module Tasks
    RSpec.describe UpdateTask, type: :request do
      describe '.resolve' do
        it 'returns task data' do
          @task = Task.new(
            title: "My task",
            description: "My description.",
            due_date: DateTime.now,
          )

          @task.save

          post '/graphql', params: { query: query() }

          json = JSON.parse(response.body)
          data = json['data']['updateTask']['task']

          expect(data).to include(
            'id'              => @task.id.to_s,
            'title'           => 'My Overwritten Task Title',
            'description'     => "Here's an updated description of my task!",
            'completed'       => true,
            'dueDate'         => "2024-04-30",
            'createdAt'       => be_present,
            'updatedAt'       => be_present,
          )
        end
      end

      def query()
        <<~GQL
          mutation {
            updateTask(
              id: #{@task.id},
              attributes: {
                title: "My Overwritten Task Title"
                description: "Here's an updated description of my task!"
                dueDate: "2024-04-30"
                completed: true
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