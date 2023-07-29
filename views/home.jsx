const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
          <main>
              <h1>HOME</h1>
              <a href="/places">
                  <button className="btn btn-primary">Places Page</button>
              </a>
              <div>
                <img src="/images/chia-fruit-drink.avif" alt="Chia Fruit Shake" />
                <div>
                  Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>

          </main>

        </Def>
    )
}

module.exports = home
