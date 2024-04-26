require 'rails_helper'

RSpec.describe "home/index.html.erb", type: :view do
  it "renders a root tag for react to hook into" do
    render :template => "home/index"

    expect(rendered).to include('id="react-root"')
  end
end
