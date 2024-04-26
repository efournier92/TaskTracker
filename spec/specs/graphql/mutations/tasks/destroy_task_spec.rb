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

          expect(Task.find(@task.id)).to be_present

          post '/graphql', params: { query: query() }

          json = JSON.parse(response.body)
          destroyed_id = json['data']['destroyTask']['id']

          expect(destroyed_id).to eq(@task.id.to_s)
        end
      end

      def query()
        <<~GQL
          mutation {
            destroyTask(
              id: #{@task.id},
            ) {
              id
            }
          }
        GQL
      end
    end
  end
end