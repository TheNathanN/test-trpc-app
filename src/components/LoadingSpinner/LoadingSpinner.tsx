import styles from "./LoadingSpinner.module.css"
import classNames from "classnames"

export type LoadingSpinnerPropsType = {
  color: string
  width: string
}

export default function LoadingSpinner({
  color,
  width,
}: LoadingSpinnerPropsType) {
  return (
    <div
      className={classNames(styles.container)}
      style={{ "--color": color, "--width": width } as React.CSSProperties}
    >
      <div className={classNames(styles.bar, styles.bar1)}></div>
      <div className={classNames(styles.bar, styles.bar2)}></div>
      <div className={classNames(styles.bar, styles.bar3)}></div>
      <div className={classNames(styles.bar, styles.bar4)}></div>
      <div className={classNames(styles.bar, styles.bar5)}></div>
      <div className={classNames(styles.bar, styles.bar6)}></div>
      <div className={classNames(styles.bar, styles.bar7)}></div>
      <div className={classNames(styles.bar, styles.bar8)}></div>
      <div className={classNames(styles.bar, styles.bar8)}></div>
      <div className={classNames(styles.bar, styles.bar7)}></div>
      <div className={classNames(styles.bar, styles.bar6)}></div>
      <div className={classNames(styles.bar, styles.bar5)}></div>
      <div className={classNames(styles.bar, styles.bar4)}></div>
      <div className={classNames(styles.bar, styles.bar3)}></div>
      <div className={classNames(styles.bar, styles.bar2)}></div>
      <div className={classNames(styles.bar, styles.bar1)}></div>
    </div>
  )
}
