import Link from 'next/link';

const Tag = ({skill, i, noMarginLeft}) => (
  <Link href={`/tags/${skill}`}>
    <a className={`stack-tag ${noMarginLeft ? "stack-no-ml": ""}`} key={i}>#{skill}</a>
  </Link>
)

export default Tag