class StudentsPeriod < ApplicationRecord
    belongs_to :student
    belongs_to :period
end
