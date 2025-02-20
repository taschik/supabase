import { Button, IconBookOpen } from '@supabase/ui'
import Link from 'next/link'
import ProductIcon from '../ProductIcon'

type subheader = string
interface Types {
  h1: string | React.ReactNode
  subheader: string[]
  icon?: string
  title?: string
  image?: React.ReactNode
  footer?: React.ReactNode
  documentation_url?: string
}

const ProductHeader = (props: Types) => (
  <div className="container mx-auto px-6 sm:px-16 xl:px-20 relative pt-16 lg:pt-32 pb-0">
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-5 space-y-8">
        <div>
          {props.icon || props.title ? (
            <div className="flex mb-4 items-center gap-3">
              {props.icon && <ProductIcon icon={props.icon} />}
              {props.title && (
                <span className="text-scale-1200" key={`product-name-${props.title}`}>
                  {props.title}
                </span>
              )}
            </div>
          ) : null}
          <h1 className="h1" key={`h1`}>
            {props.h1}
          </h1>
        </div>
        <div>
          {props.subheader &&
            props.subheader.map((subheader, i) => {
              return (
                <p className="p lg:text-lg" key={i}>
                  {subheader}
                </p>
              )
            })}
        </div>
        <div className="flex flex-row md:flex-row md:items-center">
          <Link href="https://app.supabase.io/" as="https://app.supabase.io/">
            <a>
              <Button size="medium" className="text-white">
                Start a project
              </Button>
            </a>
          </Link>
          {props.documentation_url && (
            <Link href={props.documentation_url} as={props.documentation_url}>
              <a className="ml-2">
                <Button type="default" size="medium" icon={<IconBookOpen />}>
                  See documentation
                </Button>
              </a>
            </Link>
          )}
        </div>
        {props.footer && <div className="mb-4">{props.footer}</div>}
      </div>
      {props.image && (
        <div className="mt-8 lg:mt-0 col-span-12 lg:col-span-7 xl:col-span-6 xl:col-start-7">
          {props.image}
        </div>
      )}
    </div>
  </div>
)

export default ProductHeader
