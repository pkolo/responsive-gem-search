class SearchController < ApplicationController

  def create
    q = params[:q].downcase
    search_results = Gems.search q

    # Finds exact match
    @result = search_results.find { |result| result["name"].downcase == q }

    if @result
      render partial: 'result'
    else
      render partial: 'error'
    end
  end

end
