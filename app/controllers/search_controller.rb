class SearchController < ApplicationController

  def create
    render html: params[:q]
  end

end
