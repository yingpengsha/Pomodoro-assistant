const path = require('path')
const chalk = require('chalk')
const ListR = require('listr')
const { build: viteBuild, createLogger } = require('vite')

const { MAIN_ROOT, RENDERER_ROOT } = require('./constants')

function build () {
  const tasks = new ListR([
    {
      title: 'building renderer process',
      task: buildRenderer
    },
    {
      title: 'building main process',
      task: buildMainProcess
    }
  ], { concurrent: 2 })

  tasks.run()
    .catch((error) => {
      createLogger().error(
        chalk.red(`error during build application:\n${error.stack}`)
      )
      process.exit(1)
    })
}

async function buildRenderer () {
  try {
    const rendererOutput = await viteBuild({
      root: RENDERER_ROOT,
      base: './',
      build: {
        outDir: path.resolve(__dirname, '../dist/renderer')
      }
    })
    return rendererOutput
  } catch (error) {
    createLogger().error(
      chalk.red(`error during build renderer:\n${error.stack}`)
    )
    process.exit(1)
  }
}

async function buildMainProcess () {
  try {
    const buildOutput = await viteBuild({
      root: MAIN_ROOT,
      build: {
        outDir: path.resolve(__dirname, '../dist/main')
      }
    })
    return buildOutput
  } catch (error) {
    createLogger().error(
      chalk.red(`error during build main process:\n${error.stack}`)
    )
    process.exit(1)
  }
}

build()
