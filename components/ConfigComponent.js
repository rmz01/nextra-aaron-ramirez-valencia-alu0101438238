import { useConfig } from 'nextra-theme-docs'

export default function ConfigComponent() {
  const config = useConfig()

  return (
    <div>
      <h2>Site Configuration</h2>
      <pre>{JSON.stringify(config, null, 2)}</pre>
    </div>
  )
}