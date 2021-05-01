import React from 'react'

import './avatar.css'

function Avatar({ user }) {
  function handleAvatar(sex, activity, skin) {
    let prefix
    let main
    switch (sex) {
      case 'M':
        prefix = 'man'
        break
      default:
        prefix = 'woman'
        break
    }
    switch (activity) {
      case 'P':
        main = 'pilot'
        break
      case 'M':
        main = 'mechanic'
        break
      case 'C':
        main = 'attendant'
        break
      default:
        main = 'doctor'
        break
    }
    const imageName = `${prefix}_${main}_${skin}`
    const img = {
      man_attendant_w: 'https://i.ibb.co/fdYWtRn/man-attendant-w.png',
      man_attendant_m: 'https://i.ibb.co/Ld1z82C/man-attendant-m.png',
      man_attendant_mm: 'https://i.ibb.co/F41d5q4/man-attendant-mm.png',
      man_attendant_mmm: 'https://i.ibb.co/b2HMH60/man-attendant-mmm.png',
      man_pilot_w: 'https://i.ibb.co/jJgQTQJ/man-pilot-w.png',
      man_pilot_m: 'https://i.ibb.co/L1PpF3D/man-pilot-m.png',
      man_pilot_mm: 'https://i.ibb.co/3Nt3pnJ/man-pilot-mm.png',
      man_pilot_mmm: 'https://i.ibb.co/hgTpSLC/man-pilot-mmm.png',
      man_mechanic_w: 'https://i.ibb.co/3B77sWx/man-mechanic-w.png',
      man_mechanic_m: 'https://i.ibb.co/YQ2xpGn/man-mechanic-m.png',
      man_mechanic_mm: 'https://i.ibb.co/j80BzmM/man-mechanic-mm.png',
      man_mechanic_mmm: 'https://i.ibb.co/HCswCTm/man-mechanic-mmm.png',
      man_doctor_w: 'https://i.ibb.co/7yVnxss/man-doctor-w.png',
      woman_attendant_w: 'https://i.ibb.co/Nm1KJDj/woman-attendant-w.png',
      woman_pilot_w: 'https://i.ibb.co/vVJmct3/woman-pilot-w.png',
      woman_mechanic_w: 'https://i.ibb.co/Bc36cr4/woman-mechanic-w.png',
      woman_doctor_w: 'https://i.ibb.co/1qw30s3/woman-doctor-w.png',
    }
    return img[imageName]
  }

  return (
    <div className="avatar">
      <img src={handleAvatar(user?.sex, user?.activity, user?.skin)} alt="" />
    </div>
  )
}

export default Avatar
