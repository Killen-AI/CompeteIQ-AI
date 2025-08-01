// Mock database implementation for CompetitorBrief entity
class CompetitorBriefEntity {
  constructor() {
    this.data = JSON.parse(localStorage.getItem('competitor_briefs') || '[]')
    this.nextId = Math.max(...this.data.map(item => item.id || 0), 0) + 1
  }

  async create(briefData) {
    const newBrief = {
      id: this.nextId++,
      ...briefData,
      created_date: new Date().toISOString(),
      updated_date: new Date().toISOString()
    }
    
    this.data.push(newBrief)
    this.save()
    return newBrief
  }

  async list(sortBy = '-created_date', limit = null) {
    let sorted = [...this.data]
    
    if (sortBy.startsWith('-')) {
      const field = sortBy.substring(1)
      sorted.sort((a, b) => new Date(b[field]) - new Date(a[field]))
    } else {
      sorted.sort((a, b) => new Date(a[sortBy]) - new Date(b[sortBy]))
    }
    
    return limit ? sorted.slice(0, limit) : sorted
  }

  async filter(criteria) {
    return this.data.filter(item => {
      return Object.keys(criteria).every(key => {
        if (key === 'id') {
          return item.id === parseInt(criteria[key])
        }
        return item[key] === criteria[key]
      })
    })
  }

  async update(id, updateData) {
    const index = this.data.findIndex(item => item.id === parseInt(id))
    if (index !== -1) {
      this.data[index] = {
        ...this.data[index],
        ...updateData,
        updated_date: new Date().toISOString()
      }
      this.save()
      return this.data[index]
    }
    throw new Error('Brief not found')
  }

  async delete(id) {
    const index = this.data.findIndex(item => item.id === parseInt(id))
    if (index !== -1) {
      const deleted = this.data.splice(index, 1)[0]
      this.save()
      return deleted
    }
    throw new Error('Brief not found')
  }

  save() {
    localStorage.setItem('competitor_briefs', JSON.stringify(this.data))
  }
}

export const CompetitorBrief = new CompetitorBriefEntity()