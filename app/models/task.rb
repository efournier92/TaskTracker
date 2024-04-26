class Task < ApplicationRecord
  validates :title, :presence => true
  validates :description, :presence => true

  attribute :title, :string
  attribute :description, :text
  attribute :completed, :boolean, default: false
  attribute :due_date, :date
end
