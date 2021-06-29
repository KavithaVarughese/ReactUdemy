import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

const { Switch, Route, Redirect } = require("react-router");
const { default: AllQuotes } = require("./pages/AllQuotes");
const { default: NewQuote } = require("./pages/NewQuote");
const { default: QuoteDetail } = require("./pages/QuoteDetail");

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
              <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
