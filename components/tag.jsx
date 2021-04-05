import Link from 'next/link';

const Tag = ({skill, noMarginLeft, i}) => (
  <Link href={`/tag/${skill}`}>
    <a className={`stack-tag ${noMarginLeft ? "stack-no-ml": ""}`} key={i}>#{skill}</a>
  </Link>
)

export default Tag